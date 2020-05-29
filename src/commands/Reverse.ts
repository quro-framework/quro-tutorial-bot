import { Command, CommandRequest, ArgDef, ArgType, PipeNext } from 'quro'

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
    const reversed = this.reverseArg(request)

    return this.reply(reversed)
  }

  onPipe(request: CommandRequest, next: PipeNext) {
    const reversed = this.reverseArg(request)

    return next.setAppendArgs([reversed])
  }

  private reverseArg(request: CommandRequest) {
    const args = this.getArgs(request)
    const reversed = args.input.split('').reverse().join('')

    return reversed
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
