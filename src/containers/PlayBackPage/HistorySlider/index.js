import React from 'react';
import PropTypes from 'prop-types';
import { findLastIndex } from 'lodash';

import { Button, Icon, Slider, Tooltip } from 'antd';
import styles from './HistorySlider.module.scss';

const getSliderMarks = (historyList, snapComments) => {
  const marks = {};
  if (snapComments.length > 0) {
    snapComments.forEach(item => {
      marks[item.historyIndex] = '📌';
    });
  }
  marks[0] = '0';
  marks[[historyList.length] - 1] = `${historyList.length - 1}`;
  return marks;
};

const HistorySlider = ({
  onForward,
  onBackward,
  onForwardSnapComment,
  onBackwardSnapComment,
  historyIndex,
  historyList,
  snapComments,
  onChange,
}) => (
  <div className={styles.historybar}>
    {historyList.length > 0 ? (
      <>
        <Button.Group className={styles.btnGroup}>
          <Tooltip placement="topLeft" title="Previous snapComment">
            <Button
              ghost
              type="primary"
              onClick={onBackwardSnapComment}
              disabled={
                historyIndex === 0 ||
                findLastIndex(
                  snapComments,
                  item => item.historyIndex < historyIndex,
                ) < 0
              }
            >
              <Icon type="vertical-right" />
            </Button>
          </Tooltip>
          <Tooltip placement="topLeft" title="Previous history">
            <Button
              ghost
              type="primary"
              onClick={onBackward}
              disabled={historyIndex === 0}
            >
              <Icon type="left" />
            </Button>
          </Tooltip>
        </Button.Group>
        <Slider
          className={styles.sliderBar}
          disabled={historyList.length === 0}
          marks={getSliderMarks(historyList, snapComments)}
          max={historyList.length - 1}
          min={0}
          step={1}
          defaultValue={0}
          value={historyIndex}
          onChange={onChange}
        />
        <Button.Group className={styles.btnGroup}>
          <Tooltip placement="topLeft" title="Next history">
            <Button
              ghost
              type="primary"
              onClick={onForward}
              disabled={
                historyList.length === 0 || historyIndex === historyList.length
              }
            >
              <Icon type="right" />
            </Button>
          </Tooltip>
          <Tooltip placement="topRight" title="Next snapComment">
            <Button
              ghost
              type="primary"
              onClick={onForwardSnapComment}
              disabled={
                historyList.length === 0 ||
                snapComments.findIndex(
                  item => item.historyIndex > historyIndex,
                ) < 0
              }
            >
              <Icon type="vertical-left" />
            </Button>
          </Tooltip>
        </Button.Group>
      </>
    ) : (
      <span>No history</span>
    )}
  </div>
);
HistorySlider.propTypes = {
  onForward: PropTypes.func,
  onBackward: PropTypes.func,
  onForwardSnapComment: PropTypes.func,
  onBackwardSnapComment: PropTypes.func,
  historyIndex: PropTypes.number,
  historyList: PropTypes.array,
  snapComments: PropTypes.array,
  onChange: PropTypes.func,
};
export default HistorySlider;
