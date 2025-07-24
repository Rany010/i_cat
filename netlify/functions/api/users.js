const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/users.json');

exports.handler = async (event, context) => {
  const { httpMethod, queryStringParameters, body } = event;
  
  try {
    switch (httpMethod) {
      case 'GET':
        return await getUsers(queryStringParameters);
      case 'POST':
        return await createUser(JSON.parse(body));
      case 'PUT':
        return await updateUser(JSON.parse(body));
      case 'DELETE':
        return await deleteUser(queryStringParameters);
      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

async function getUsers(params) {
  // TODO: 实现获取用户信息逻辑
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: '获取用户信息' })
  };
}

async function createUser(data) {
  // TODO: 实现用户注册逻辑
  return {
    statusCode: 201,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: '用户注册成功' })
  };
}

async function updateUser(data) {
  // TODO: 实现更新用户信息逻辑
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: '更新用户信息成功' })
  };
}

async function deleteUser(params) {
  // TODO: 实现删除用户逻辑
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: '删除用户成功' })
  };
} 