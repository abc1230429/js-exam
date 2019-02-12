import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import styles from './CodeWidget.module.scss';

class CodeWidget extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.editor.editor.resize();
    },200);
  }

  render() {
    const { mode, theme, readOnly, handleCodeChange, data } = this.props;

    return (
      <AceEditor
        ref="editor"
        className={styles.code}
        showPrintMargin={false}
        mode={mode}
        theme={theme}
        readOnly={readOnly}
        onChange={handleCodeChange}
        value={data}
        tabSize={2}
        debounceChangePeriod={800}
      />
    );
  }
}

CodeWidget.propTypes = {
  handleCodeChange: PropTypes.func,
  data: PropTypes.string,
  mode: PropTypes.string,
  theme: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default CodeWidget;
