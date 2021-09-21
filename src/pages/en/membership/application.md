---
templateKey: membership-application-page
lang: en
hero:
  height: 26
  image: /img/hans-reniers-lqgjcmy5qcm-unsplash2.jpg
  subtitle: |
    Online application form for HDIR association
  title: New application
  top: Application for membership
  link:
    page: ""
    title: ""
form:
  button: Submit application
  isPdf: true
  name: membership
  pdf:
    day: On day
    defaultFullName: Your full name
    header:
      leftColumn:
        - text: "OiB: 01690550600"
        - text: Bijenička 54
        - text: "Tel: 01/457-1292"
        - text: www.hdir.hr
      rightColumn:
        - text: "MB: 2517744"
        - text: HR-10000 Zagreb
        - text: www.hdir.hr
        - text: "E-mail: info@hdir.hr"
      title: Croatian Association for Cancer Research
    mailingDetails:
      - text: "Please pay the annual membership fee with a general payment slip or
          online banking at the expense of CACR:"
      - text: "Amount: 20 € in Croatian kuna (HRK) equivalent"
      - text: "Description of payment: $fullName – for membership"
      - text: "Recipient's IBAN: HR5023600001102084564"
    paymentDetails:
      - text: "Please send the completed and signed application form to the Secretary's
          address of CACR:"
      - text: Dr. sc. Petar Ozretić
      - text: Institut Ruđer Bošković
      - text: Bijenička 54, HR-10000 Zagreb
    signature: "Signature:"
    title: MEMBERSHIP APPLICATION FORM
  sections:
    - fields:
        - isFullWidth: false
          isRequired: true
          name: firstName
          title: First Name
          type: text
        - isFullWidth: false
          isRequired: true
          name: lastName
          title: Last Name
          type: text
        - title: Title
          name: title
          type: text
          isRequired: false
          isFullWidth: false
        - title: Scientific degree
          name: degree
          type: text
          isRequired: false
          isFullWidth: false
        - title: Date of birth
          name: birthday
          type: date
          isRequired: true
          isFullWidth: false
        - title: Place of birth
          name: birthPlace
          type: text
          isRequired: false
          isFullWidth: false
        - title: PIN
          name: pin
          type: number
          isRequired: true
          isFullWidth: false
      title: Basic information
    - fields:
        - title: Institution where you work
          name: workplace
          type: text
        - title: Department
          name: department
          type: text
        - title: Street
          name: street
          type: text
        - title: Street number
          name: streetNumber
          type: number
        - title: City
          name: city
          type: text
        - title: Postal code
          name: postalCode
          type: number
        - title: Country
          name: country
          type: text
        - title: Phone number
          name: phone
          type: text
          isRequired: true
        - title: E-mail
          isRequired: true
          type: email
          name: email
        - title: Scientific interest
          name: interest
          type: textarea
          isFullWidth: true
        - isRequired: true
          isFullWidth: true
          type: checkbox
          title: I agree that my information provided in this application will be
            forwarded to European Association for Cancer Research (EACR) for the
            purpose of opening the free user account required to join the above
            association and to receive their mail in electronic and paper form
            format.
          name: agreement
      title: Contact information
  success:
    button: Download PDF file
    subtitle: Please download the PDF file and sign the document.
    title: Thank you for filling out the form
---
