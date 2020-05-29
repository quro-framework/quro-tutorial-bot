import { Command, CommandRequest, PipeNext } from 'quro'

export class UsernameCommand extends Command {
  name = 'username'

  aliases = []

  description = ''

  argDefs = {}

  /**
   * Call on handle.
   *
   * @param request
   */
  onHandle(request: CommandRequest) {
    return this.reply(request.author.username)
  }

  onPipe(request: CommandRequest, next: PipeNext) {
    return next.setAppendArgs([request.author.username])
  }

  /**
   * Returns parsed arguments.
   *
   * @param request
   */
  getArgs(request: CommandRequest) {
    return this.parseArgs<UsernameCommand>(request)
  }
}

export const username = new UsernameCommand()
