const reactQuillConfiguration = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{list: 'ordered'}, {list: 'bullet'}],
      ['link'],
      ['clean']
    ]
  },
  formats: ['bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link']
}

// eslint-disable-next-line import/prefer-default-export
export {reactQuillConfiguration}
