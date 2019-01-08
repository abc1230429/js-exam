// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRoom = `mutation CreateRoom($input: CreateRoomInput!) {
  createRoom(input: $input) {
    id
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    subjectId
    description
    status
    host {
      id
      name
    }
    createTime
    password
    users {
      items {
        id
        name
      }
      nextToken
    }
    currentRecord {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const updateRoom = `mutation UpdateRoom($input: UpdateRoomInput!) {
  updateRoom(input: $input) {
    id
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    subjectId
    description
    status
    host {
      id
      name
    }
    createTime
    password
    users {
      items {
        id
        name
      }
      nextToken
    }
    currentRecord {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const deleteRoom = `mutation DeleteRoom($input: DeleteRoomInput!) {
  deleteRoom(input: $input) {
    id
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    subjectId
    description
    status
    host {
      id
      name
    }
    createTime
    password
    users {
      items {
        id
        name
      }
      nextToken
    }
    currentRecord {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const createJeUser = `mutation CreateJeUser($input: CreateJEUserInput!) {
  createJEUser(input: $input) {
    id
    name
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
    team {
      id
      name
      description
    }
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    hostTest {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
  }
}
`;
export const updateJeUser = `mutation UpdateJeUser($input: UpdateJEUserInput!) {
  updateJEUser(input: $input) {
    id
    name
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
    team {
      id
      name
      description
    }
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    hostTest {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
  }
}
`;
export const deleteJeUser = `mutation DeleteJeUser($input: DeleteJEUserInput!) {
  deleteJEUser(input: $input) {
    id
    name
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
    team {
      id
      name
      description
    }
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    hostTest {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
  }
}
`;
export const createTeam = `mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
    id
    name
    description
    users {
      items {
        id
        name
      }
      nextToken
    }
    questionSet {
      items {
        id
        name
        description
        tags
      }
      nextToken
    }
  }
}
`;
export const updateTeam = `mutation UpdateTeam($input: UpdateTeamInput!) {
  updateTeam(input: $input) {
    id
    name
    description
    users {
      items {
        id
        name
      }
      nextToken
    }
    questionSet {
      items {
        id
        name
        description
        tags
      }
      nextToken
    }
  }
}
`;
export const deleteTeam = `mutation DeleteTeam($input: DeleteTeamInput!) {
  deleteTeam(input: $input) {
    id
    name
    description
    users {
      items {
        id
        name
      }
      nextToken
    }
    questionSet {
      items {
        id
        name
        description
        tags
      }
      nextToken
    }
  }
}
`;
export const createTest = `mutation CreateTest($input: CreateTestInput!) {
  createTest(input: $input) {
    id
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
    team {
      id
      name
      description
    }
    subjectId
    users {
      items {
        id
        name
      }
      nextToken
    }
    host {
      id
      name
    }
    description
    timeBegin
    timeEnd
    records {
      items {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        videoUrl
      }
      nextToken
    }
    status
    tags
  }
}
`;
export const updateTest = `mutation UpdateTest($input: UpdateTestInput!) {
  updateTest(input: $input) {
    id
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
    team {
      id
      name
      description
    }
    subjectId
    users {
      items {
        id
        name
      }
      nextToken
    }
    host {
      id
      name
    }
    description
    timeBegin
    timeEnd
    records {
      items {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        videoUrl
      }
      nextToken
    }
    status
    tags
  }
}
`;
export const deleteTest = `mutation DeleteTest($input: DeleteTestInput!) {
  deleteTest(input: $input) {
    id
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
    team {
      id
      name
      description
    }
    subjectId
    users {
      items {
        id
        name
      }
      nextToken
    }
    host {
      id
      name
    }
    description
    timeBegin
    timeEnd
    records {
      items {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        videoUrl
      }
      nextToken
    }
    status
    tags
  }
}
`;
export const createRecord = `mutation CreateRecord($input: CreateRecordInput!) {
  createRecord(input: $input) {
    id
    subjectId
    syncCode
    interviewer {
      id
      name
    }
    timeBegin
    timeEnd
    comment {
      items {
        author
        time
        content
      }
      nextToken
    }
    history {
      items {
        time
        code
      }
      nextToken
    }
    ques {
      type
      name
      content
      test
    }
    videoUrl
    question {
      id
      type
      name
      content
      test
    }
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
  }
}
`;
export const updateRecord = `mutation UpdateRecord($input: UpdateRecordInput!) {
  updateRecord(input: $input) {
    id
    subjectId
    syncCode
    interviewer {
      id
      name
    }
    timeBegin
    timeEnd
    comment {
      items {
        author
        time
        content
      }
      nextToken
    }
    history {
      items {
        time
        code
      }
      nextToken
    }
    ques {
      type
      name
      content
      test
    }
    videoUrl
    question {
      id
      type
      name
      content
      test
    }
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
  }
}
`;
export const deleteRecord = `mutation DeleteRecord($input: DeleteRecordInput!) {
  deleteRecord(input: $input) {
    id
    subjectId
    syncCode
    interviewer {
      id
      name
    }
    timeBegin
    timeEnd
    comment {
      items {
        author
        time
        content
      }
      nextToken
    }
    history {
      items {
        time
        code
      }
      nextToken
    }
    ques {
      type
      name
      content
      test
    }
    videoUrl
    question {
      id
      type
      name
      content
      test
    }
    test {
      id
      subjectId
      description
      timeBegin
      timeEnd
      status
      tags
    }
    room {
      id
      subjectId
      description
      status
      createTime
      password
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    author
    time
    content
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    author
    time
    content
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    author
    time
    content
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const createHistory = `mutation CreateHistory($input: CreateHistoryInput!) {
  createHistory(input: $input) {
    time
    code
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const updateHistory = `mutation UpdateHistory($input: UpdateHistoryInput!) {
  updateHistory(input: $input) {
    time
    code
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const deleteHistory = `mutation DeleteHistory($input: DeleteHistoryInput!) {
  deleteHistory(input: $input) {
    time
    code
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const createQuestionSnapshot = `mutation CreateQuestionSnapshot($input: CreateQuestionSnapshotInput!) {
  createQuestionSnapshot(input: $input) {
    id
    type
    name
    content
    test
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const updateQuestionSnapshot = `mutation UpdateQuestionSnapshot($input: UpdateQuestionSnapshotInput!) {
  updateQuestionSnapshot(input: $input) {
    id
    type
    name
    content
    test
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const deleteQuestionSnapshot = `mutation DeleteQuestionSnapshot($input: DeleteQuestionSnapshotInput!) {
  deleteQuestionSnapshot(input: $input) {
    id
    type
    name
    content
    test
    record {
      id
      subjectId
      syncCode
      timeBegin
      timeEnd
      videoUrl
    }
  }
}
`;
export const createQuestionSet = `mutation CreateQuestionSet($input: CreateQuestionSetInput!) {
  createQuestionSet(input: $input) {
    id
    team {
      id
      name
      description
    }
    questions {
      items {
        id
        type
        name
        content
        test
        tags
      }
      nextToken
    }
    name
    description
    tags
  }
}
`;
export const updateQuestionSet = `mutation UpdateQuestionSet($input: UpdateQuestionSetInput!) {
  updateQuestionSet(input: $input) {
    id
    team {
      id
      name
      description
    }
    questions {
      items {
        id
        type
        name
        content
        test
        tags
      }
      nextToken
    }
    name
    description
    tags
  }
}
`;
export const deleteQuestionSet = `mutation DeleteQuestionSet($input: DeleteQuestionSetInput!) {
  deleteQuestionSet(input: $input) {
    id
    team {
      id
      name
      description
    }
    questions {
      items {
        id
        type
        name
        content
        test
        tags
      }
      nextToken
    }
    name
    description
    tags
  }
}
`;
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    type
    questionSet {
      id
      name
      description
      tags
    }
    name
    content
    test
    tags
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    type
    questionSet {
      id
      name
      description
      tags
    }
    name
    content
    test
    tags
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
    id
    type
    questionSet {
      id
      name
      description
      tags
    }
    name
    content
    test
    tags
  }
}
`;
