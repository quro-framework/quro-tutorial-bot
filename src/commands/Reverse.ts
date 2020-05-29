import { Command, CommandRequest, ArgDef, ArgType } from 'quro'

export class ReverseCommand extends Command {
  name = 'reverse'

  aliases = []

  description = ''

  argDefs = {
    input: new ArgDef({
      name: 'input',
      type: ArgType.String,
    }),
  }

  /**
   * Call on handle.
   *
   * @param request
   */
  onHandle(request: CommandRequest) {
    const args = this.getArgs(request)
    const reversed = args.input.split('').reverse().join('')

    return this.reply(reversed)
  }

  /**
   * Returns parsed arguments.
   *
   * @param request
   */
  getArgs(request: CommandRequest) {
    return this.parseArgs<ReverseCommand>(request)
  }
}

export const reverse = new ReverseCommand()
