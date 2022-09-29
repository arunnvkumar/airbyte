import classNames from "classnames";
import React from "react";

import { Text } from "components/ui/Text";

import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  withLine?: boolean;
  middleComponent?: React.ReactNode;
  middleTitleBlock?: React.ReactNode;
  endComponent?: React.ReactNode;
  title: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, withLine, middleComponent, middleTitleBlock, endComponent }) => (
  <div className={classNames(styles.container, { [styles.withLine]: withLine })}>
    <Text className={styles.titleBlock} as="h3">
      {title}
    </Text>
    {middleTitleBlock ? (
      <Text className={styles.middleTitleBlock} as="h3">
        {middleTitleBlock}
      </Text>
    ) : (
      <div className={styles.middleBlock}>{middleComponent}</div>
    )}
    <div className={styles.endBlock}>{endComponent}</div>
  </div>
);

export default PageTitle;
