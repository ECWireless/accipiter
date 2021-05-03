import { colors } from 'components/theme';

import Banner from 'components/Banner';
import Spacer from 'components/Spacer';

export const OurTech: React.FC = () => {
  return (
    <div style={{ borderTop: `1px ${colors.green} solid`}}>
      <Banner heading={'Our Tech'} />
    </div>
  )
}