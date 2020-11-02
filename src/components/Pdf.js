import React from 'react'
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import PropTypes from 'prop-types'

import { logoData } from '../img/logoData'

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Pdf = class extends React.Component {
  create(formState, lang, pdf, sections) {
    const dateInfo = new Date().toLocaleString(lang).replace(',', ' ').split(' ');
    dateInfo.splice(lang == "en" ? -2 : -1);

    let content = [
      {
        columns: [
          {
            text: '',
            width: 75,
          },
          { 
            text: pdf.header.title,
            style: 'headerTitle',
            margin: [10,0,0,0]
          }
        ]
      },
      {
        columns: [
          {
            width: 75,
            image: logoData
          },
          { 
            text: pdf.header.leftColumn.map((item, i) => { return (i === 0) ? item.text : '\n' + item.text}),
            style: 'header',
            width: 100,
            margin: [10,0,0,0]
          },
          { 
            text: pdf.header.rightColumn.map((item, i) => { return (i === 0) ? item.text : '\n' + item.text}),
            style: 'header',
            width: 100,
            margin: [10,0,0,0]
          }
        ]
      },
      {
        text: pdf.title,
        style: 'title',
        alignment: 'center',
        margin: [0,35,0,35]
      }
    ];

    const styles = {
      headerTitle: {
        fontSize: 12,
        lineHeight: 1.3,
        bold: true
      },
      header: {
        color: '#696969',
        fontSize: 9,
        lineHeight: 1.2
      },
      title: {
        fontSize: 16,
        bold: true
      },
      label: {
        fontSize: 10,
        lineHeight: 1.5,
        bold: true,
        alignment: 'right',
        margin: [0,0,10,0]
      },
      lengthyLabel: {
        fontSize: 10,
        lineHeight: 1.4,
        margin: [0,20,0,0]
      },
      fieldValue: {
        fontSize: 10,
        lineHeight: 1.3,
      },
      footer: {
        fontSize: 9,
        color: '#696969',
        lineHeight: 1.3
      }
    };

    let firstName = ''
    let lastName = ''
  
    sections.map((section) => section.fields.map((field) => {
      let text = (formState[field.name]) ? formState[field.name] : '';
      if (field.type === 'date'){
        const dateInput = new Date(formState[field.name]).toLocaleString(lang).replace(',', ' ').split(' ');
        dateInput.splice(lang == "en" ? -2 : -1);
        text = dateInput.join(' ');
      }

      if (field.name === 'firstName')
        firstName = formState[field.name]
      else if (field.name === 'lastName')
        lastName = formState[field.name]

      content.push({
        columns: [
          {
            text: field.title,
            style: (field.title.length > 60) ? 'lengthyLabel' : 'label',
            width: (field.title.length > 60) ? 500 : 120,
          },
          {
            text: text,
            style: 'fieldValue'
          }
        ]
      })
    }))

    content.push({
      columns: [
        {
          text: `${pdf.day} ${dateInfo.join(' ')}, ${pdf.signature}`,
          alignment: 'right',
          fontSize: 10,
          margin: [0,40,10,40]
        },
        {
          svg: '<svg height="10" width="200"><line x1="0" y1="0" x2="200" y2="0" style="stroke:black" /></svg> ',
          alignment: 'right',
          margin: [0,50,0,0],
          width: 200
        }
      ]
    })

    const fullName = (firstName !== '' && lastName !== '') ? `${firstName} ${lastName}` : `${pdf.defaultName}`
    const mailingDetails = pdf.mailingDetails.map(detail => detail.text.replace("$fullName", fullName))
    const paymentDetails = pdf.paymentDetails.map(detail => detail.text.replace("$fullName", fullName))

    content.push({
      columns: [
        {
          text: paymentDetails.map((item, i) => { return (i === 0) ? item : '\n' + item}),
          margin: [0,0,30,0]
        },
        {
          text: mailingDetails.map((item, i) => { return (i === 0) ? item : '\n' + item}),
        }
      ],
      style: 'footer'
    })

    const docDefinition = {
      content,
      styles,
      defaultStyle: {
        font: 'Raleway'
      }
    }

    const fonts = {
      Raleway: {
        normal: 'https://cdn.jsdelivr.net/npm/fonts-raleway@0.0.4/fonts/fonts-raleway/Raleway-Regular.ttf',
        bold: 'https://cdn.jsdelivr.net/npm/fonts-raleway@0.0.4/fonts/fonts-raleway/Raleway-Bold.ttf',
      }
    }

    pdfMake.createPdf(docDefinition, null, fonts).open();
  }

  render() {
    const { button, formState, lang, pdf, sections } = this.props;

    return (
    <button className="btn" onClick={() => this.create(formState, lang, pdf, sections)}>{button}</button>
    )
  }
}

Pdf.propTypes = {
  button: PropTypes.string,
  formState: PropTypes.object,
  lang: PropTypes.string,
  pdf: PropTypes.object,
  sections: PropTypes.array
}

export default Pdf
