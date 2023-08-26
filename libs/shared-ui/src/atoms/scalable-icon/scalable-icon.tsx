import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { SvgIcon } from '@mui/material';

export type FontAwesomeScalableIconProps = {
  icon: IconDefinition;
};

export const FontAwesomeScalableIcon = (props: FontAwesomeIconProps) => {
  if (props.size) {
    return <FontAwesomeIcon {...props} />;
  }

  return (
    <SvgIcon>
      <svg width="24" height="24" viewBox="0 0 24 20" preserveAspectRatio="xMidYMid meet">
        <FontAwesomeIcon {...props} />
      </svg>
    </SvgIcon>
  );
};
