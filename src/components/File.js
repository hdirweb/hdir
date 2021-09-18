import React from 'react'

import Document from '../img/social/document.svg';

const File = class extends React.Component {
  render() {
    const { file } = this.props;

    if (!file)
      return null;

    if (!file.name)
      return null;

    return (
      <div className="flex pt-12">
        <Document className="w-8 fill-current text-brown-500 mr-4"/>
        <a 
          className="text-xl font-bold underline"
          href={file.path.publicURL}
          target="_blank"
        >
          {file.name ? file.name : ""}
        </a>
      </div>
    )
  }
}

File.propTypes = {
  file: {}
}

export default File
