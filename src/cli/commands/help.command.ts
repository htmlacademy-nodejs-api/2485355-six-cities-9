import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {

    console.info(`
      ${chalk.green('Программа для подготовки данных для REST API сервера.')}
      ${chalk.green('Пример')}:
          ${chalk.yellow('cli.js --<command> [--arguments]')}
      ${chalk.green('Команды:')}
          ${chalk.yellow('--version:')}                   ${chalk.green('# выводит номер версии')}
          ${chalk.yellow('--help:')}                      ${chalk.green('# печатает этот текст')}
          ${chalk.yellow('--import <path> <username> <password> <host> <bdname> <salt>')}             ${chalk.green('# импортирует данные из TSV в базу данных')}
          ${chalk.yellow('--generate <n> <path> <url>')}  ${chalk.green('# генерирует произвольное количество тестовых данных')}
  `);
  }
}
