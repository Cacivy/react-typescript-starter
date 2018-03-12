export default interface IUser {
  id: number
  username: string

  clear: () => void
  update: (id: number, username: string) => void
}