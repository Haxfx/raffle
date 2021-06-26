import ShowMoreText from "react-show-more-text";

interface ITruncate {
  lineCount: string;
  moreText: boolean;
  lessText: boolean;
  additionalClasses: string;
  width: string;
  callback: () => void;
  children: any;
}

export const Truncate = ({
  lineCount,
  moreText,
  lessText,
  additionalClasses,
  width,
  callback,
  children,
}: ITruncate) => {
  return (
    <ShowMoreText
      /* Default options */
      lines={lineCount}
      more={moreText}
      less={lessText}
      className={additionalClasses}
      anchorClass="my-anchor-css-class"
      //onClick={callbackk}
      expanded={false}
      width={width}
    >
      {children}
    </ShowMoreText>
  );
};
