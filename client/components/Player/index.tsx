import { IconButton } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import styles from './Player.module.scss';

const Index = () => {
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
    </div>
  );
};

export default Index;
