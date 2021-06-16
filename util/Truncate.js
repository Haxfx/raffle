import ShowMoreText from "react-show-more-text";

export const Truncate = ({
  lineCount,
  moreText,
  lessText,
  additionalClasses,
  width,
  callback,
  children,
}) => {
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
