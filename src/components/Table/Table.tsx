import { nanoid } from 'nanoid';
import React from 'react';
import * as Styled from './styled';
import TableRow from './TableRow';

interface TableProps {
  thead: [string, number][];
  rows: {
    tableData: Array<Array<string | number | React.ReactNode>>;
    comments?: Array<Array<string | number | React.ReactNode>>;
  }[];
}

function Table({ thead, rows }: TableProps) {
  const sumFlex = thead.reduce((acc, [, flex]) => acc + flex, 0);
  return (
    <Styled.Table>
      <Styled.THead>
        <Styled.Tr>
          {thead.map(([text, flex]) => (
            <Styled.HeadTd key={nanoid()} flex={flex / sumFlex}>
              {text}
            </Styled.HeadTd>
          ))}
        </Styled.Tr>
      </Styled.THead>
      <tbody>
        {rows.map(({ tableData, comments }) => {
          if (comments) {
            return (
              <TableRow
                key={nanoid()}
                comments={comments}
                thead={thead}
                sumFlex={sumFlex}
              >
                {tableData.map((data, i) => (
                  <Styled.BodyTd
                    key={nanoid()}
                    hasProfile={typeof data === 'object'}
                    flex={thead[i][1] / sumFlex}
                  >
                    {data}
                  </Styled.BodyTd>
                ))}
              </TableRow>
            );
          }
          return (
            <Styled.Tr key={nanoid()}>
              {tableData.map((data, i) => (
                <Styled.BodyTd
                  key={nanoid()}
                  hasProfile={typeof data === 'object'}
                  flex={thead[i][1] / sumFlex}
                >
                  {data}
                </Styled.BodyTd>
              ))}
            </Styled.Tr>
          );
        })}
      </tbody>
    </Styled.Table>
  );
}

export default React.memo(Table);
