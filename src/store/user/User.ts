import { observable, action } from 'mobx'
import IUser from './IUser'

export default class User implements IUser {
  @observable id: number
  @observable username: string

  constructor() {
    this.id = 1
    this.username = 'Alan'
  }

  @action
  update = (id: number, username: string) => {
    this.id = id
    this.username = username
  }

  @action
  clear = () => {
    this.id = 0
    this.username = ''
  }
}