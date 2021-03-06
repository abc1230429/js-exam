import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatTime } from 'utils/format';

import { List, Avatar, Icon, Button, Modal } from 'antd';
import { deleteTestAction } from '../../../redux/test/actions';

import style from './TestList.module.scss';

import CandidateSummary from './CandidateSummary/index';

class TestList extends React.Component {
  state = {
    delConfirmModalVisible: false,
    delTest: null,
    delAnime: false,
    testResultModalVisible: false,
    testResultModalTarget: [],
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.delAnime && !nextState.delAnime);
  }

  handleDeleteButton = test => event => {
    this.setState({ delConfirmModalVisible: true, delTest: test });
  };

  hideDelConfirmModal = () => {
    this.setState({
      delConfirmModalVisible: false,
    });
  };

  handleOnOkDelConfirmModal = async () => {
    const { delTest } = this.state;
    const { deleteTestAction } = this.props;
    this.hideDelConfirmModal();
    // show the delete animation first and then do the delete action
    this.setState({ delAnime: true });
    setTimeout(async () => {
      await deleteTestAction(delTest);
      this.setState({ delAnime: false });
    }, 500);
  };

  showTestResultModal = e => {
    // console.log(e.target.getAttribute('candidateName'));
    this.setState({
      testResultModalVisible: true,
      testResultModalTarget: [
        e.target.getAttribute('candidate'),
        e.target.getAttribute('interviewer'),
      ],
    });
  };

  testResultModalCancel = () => {
    this.setState({
      testResultModalVisible: false,
    });
  };

  render() {
    const { data } = this.props;
    const { delTest, delConfirmModalVisible, delAnime } = this.state;
    return (
      <>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              className={
                delAnime && delTest && delTest.id === item.id
                  ? style.delAnime
                  : ''
              }
              actions={[
                <Button
                  size="small"
                  onClick={this.showTestResultModal}
                  candidate={item.subjectId}
                  interviewer={item.tags[0]}
                >
                  Open Summary
                </Button>,
                <Link
                  to={{
                    pathname: `/admin/playback/${item.id}`,
                  }}
                >
                  Playback
                </Link>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar icon="code" className={style.avatar} />}
                title={item.subjectId}
                description={formatTime(item.timeBegin)}
              />
              {item && item.tags && item.tags[0] === localStorage.username && (
                <button
                  type="button"
                  className={style.floatTop}
                  onClick={this.handleDeleteButton(item)}
                >
                  <Icon type="delete" theme="twoTone" twoToneColor="#f00" />
                </button>
              )}
            </List.Item>
          )}
        />
        <Modal
          title={`Candidate：${this.state.testResultModalTarget[0]}`}
          visible={this.state.testResultModalVisible}
          onCancel={this.testResultModalCancel}
          footer={null}
          width={700}
        >
          <h2>Interview Questions</h2>
          <CandidateSummary testListData={this.state.testResultModalTarget} />,
        </Modal>
        <Modal
          title=""
          visible={delConfirmModalVisible}
          okType="danger"
          okText="Delete"
          onOk={this.handleOnOkDelConfirmModal}
          onCancel={this.hideDelConfirmModal}
        >
          Are you sure you want to delete test{' '}
          <b>{delTest ? delTest.subjectId : ''}</b> ?
        </Modal>
      </>
    );
  }
}
TestList.propTypes = {
  data: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
  deleteTestAction: delTest => dispatch(deleteTestAction(delTest)),
});
export default connect(null, mapDispatchToProps)(TestList);
