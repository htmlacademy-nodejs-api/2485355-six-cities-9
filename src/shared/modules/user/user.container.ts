import { Container } from 'inversify';
import { Component } from '../../types/index.js';
import { UserService, DefaultUserService } from './index.js';

export function createUserContainer() {
  const userContainer = new Container();
  userContainer.bind<UserService>(Component.UserService).to(DefaultUserService).inSingletonScope();

  return userContainer;
}
