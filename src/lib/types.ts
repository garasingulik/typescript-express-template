import { Either } from 'fp-ts/lib/Either'
import * as t from 'io-ts'

export * from 'tswrap'

export const parseData = <T>(
  data: any,
  structure: t.TypeC<any> | t.IntersectionC<any>
): Either<t.Errors, any> | T => {
  const decoded = structure.decode(data)

  if (decoded._tag === 'Left') {
    return decoded
  }

  return decoded.right as T
}

export const isParseError = (arg: any): arg is Either<t.Errors, any> => {
  return arg && arg._tag === 'Left'
}

export const asyncForEach = async <T>(
  array: T[],
  callback: (el: T, i: number, a: T[]) => void
) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export const echo = () => {
  return 'OK'
}

/* Register Types Here */
export const IHelloRequest = t.interface({
  name: t.string
})

export type HelloRequest = t.TypeOf<typeof IHelloRequest>
