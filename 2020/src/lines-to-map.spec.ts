import { linesToMap } from './lines-to-map'

it('converts lines to a map', () => {
    const lines = [
        '..##.......',
        '#...#...#..'
    ]

    const result = [
        ['.', '.', '#', '#','.', '.', '.', '.','.', '.', '.'],
        ['#', '.', '.', '.','#', '.', '.', '.','#', '.', '.'],
    ]

    const actual = linesToMap(lines)

    expect(actual).toStrictEqual(result)
})