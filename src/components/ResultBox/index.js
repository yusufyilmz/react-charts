import React, { Fragment } from 'react';
import ResultContainer from '../../containers/resultContainer';
import Modal from '../Modal';

const Result = () => {
    return (
        <ResultContainer>
            {
                ({ error, message, resetResult }) => (
                    <Fragment>
                        {error  && <Modal message={message} error={error} closeModal={resetResult}/>}
                    </Fragment>
                )
            }
        </ResultContainer>
    );
}

export default Result;