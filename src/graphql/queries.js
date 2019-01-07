// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
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
export const listRooms = `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getJeUser = `query GetJeUser($id: ID!) {
  getJEUser(id: $id) {
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
export const listJeUsers = `query ListJeUsers(
  $filter: ModelJEUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listJEUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
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
export const listTeams = `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTest = `query GetTest($id: ID!) {
  getTest(id: $id) {
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
export const listTests = `query ListTests(
  $filter: ModelTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getRecord = `query GetRecord($id: ID!) {
  getRecord(id: $id) {
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
export const listRecords = `query ListRecords(
  $filter: ModelRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getHistory = `query GetHistory($id: ID!) {
  getHistory(id: $id) {
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
export const listHistorys = `query ListHistorys(
  $filter: ModelHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getQuestionSnapshot = `query GetQuestionSnapshot($id: ID!) {
  getQuestionSnapshot(id: $id) {
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
export const listQuestionSnapshots = `query ListQuestionSnapshots(
  $filter: ModelQuestionSnapshotFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionSnapshots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getQuestionSet = `query GetQuestionSet($id: ID!) {
  getQuestionSet(id: $id) {
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
export const listQuestionSets = `query ListQuestionSets(
  $filter: ModelQuestionSetFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
