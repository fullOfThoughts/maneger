import React from 'react'
const withCopyRight = (My) => {
  return class Nei extends React.Component {
    render() {
      return (
        <>
          <My />
          2020
        </>
      )
    }
  }
}
export default withCopyRight
