import React from 'react';
import { connect } from 'react-redux';

const format = (json: any) => JSON.stringify(json);

const ViewState: React.FC<any> = (props) => {
  const { state } = props;

  return (
    <div className="code-container">
      <pre>{format(state)}</pre>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(ViewState);
