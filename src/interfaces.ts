enum SHOW_TEXT_DURATION {
  SHORT = 0,
  LONG = 1,
}

type TConstants = { [key in keyof typeof SHOW_TEXT_DURATION]: typeof SHOW_TEXT_DURATION[key] }

export interface ITestFeMobileModule extends TConstants {
  sampleMethodWithCallback(stringArgument: string, numberArgument: number, cb: (result: string) => void): void
  sampleMethodWithPromise(stringArgument: string, numberArgument: number): Promise<string>
  showText(message: string, duration: SHOW_TEXT_DURATION): void
  getTextLength(message: string): Promise<number>
}
