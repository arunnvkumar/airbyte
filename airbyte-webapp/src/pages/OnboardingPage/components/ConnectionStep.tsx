import React from "react";

import { CreateConnection } from "components/CreateConnection";

import { useDestinationList } from "hooks/services/useDestinationHook";
import { useSourceList } from "hooks/services/useSourceHook";

interface IProps {
  onNextStep: () => void;
}

const ConnectionStep: React.FC<IProps> = ({ onNextStep: afterSubmitConnection }) => {
  const { sources } = useSourceList();
  const { destinations } = useDestinationList();

  return (
    <CreateConnection source={sources[0]} destination={destinations[0]} afterSubmitConnection={afterSubmitConnection} />
  );
};

export default ConnectionStep;
