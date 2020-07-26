import React from 'react'
import PropTypes from 'prop-types'
const ErrorIndicator = ({errors}) => {
    return <div className={"center error-indicator"}>
            {errors.msg}
            <p>Please,try again</p>
    </div>

}
ErrorIndicator.propTypes={
    errors:PropTypes.object.isRequired
}

export default ErrorIndicator
