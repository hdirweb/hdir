import React from 'react'

import File from '../components/File';

const Docs = class extends React.Component {
  render() {
    const { files, show, title } = this.props.docs;

    if (!show)
      return null;

    return (
        <section className="py-12">
            <div className="limit">
              <h2 className="max-w-xl font-extrabold leading-none text-4xl md:text-5xl">{title}</h2>
              {files.map(file => <File file={file}/>)}
            </div>
        </section>
    )
  }
}

Docs.propTypes = {
  docs: {}
}

export default Docs
