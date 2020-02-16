import React from 'react';
import { Avatar } from '@material-ui/core';
import translateString from '../utils/StringHelper';
import MainContent from '../components/MainContent';
import cat from '../resources/assets/cat.jpg';
import group from '../resources/assets/fakesinging.jpg';

const About = () => {
  const t = translateString;

  return (
    <div className="mainContent">
      <h1>About Us</h1>
      <img src={group} width="400" height="200" alt="group singing"/>
      <h2>A note from our director:</h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat mollis orci, eu interdum ipsum sollicitudin et. Vivamus a rhoncus nunc, sed aliquet libero. Nam sed maximus mauris, et tincidunt purus. Nulla ac tincidunt felis. Aenean eu molestie metus. Suspendisse convallis tellus magna, nec consequat orci laoreet ac. Pellentesque hendrerit, velit quis dictum pellentesque, nunc purus sollicitudin ligula, in placerat nisi diam sed dui.
      </p>
      <p>
          Vestibulum cursus libero nec aliquet convallis. Ut erat arcu, hendrerit tincidunt tortor vitae, cursus elementum sem. Mauris vitae risus id enim viverra rutrum. Sed cursus, nibh ac pellentesque consectetur, ligula ex blandit justo, et vulputate ante mauris at nulla. Sed fringilla ullamcorper orci ac dictum. Maecenas ut orci id sapien placerat iaculis. Duis tempus sem a bibendum lobortis. Maecenas eget porttitor quam. Duis efficitur lorem mauris, volutpat viverra eros tempus ut. Vestibulum in feugiat augue. Aliquam convallis, risus eget sagittis ullamcorper, ex magna consectetur tortor, quis ultrices orci felis non ipsum. Duis tristique facilisis commodo. Vestibulum luctus maximus venenatis. Proin magna dolor, congue et condimentum vitae, pretium vitae orci. Aliquam vel venenatis neque.
      </p>
      <p>
          Phasellus faucibus mi leo, in tristique neque pharetra in. Nam posuere tellus vel justo pellentesque, non pulvinar arcu rhoncus. Donec lorem magna, tincidunt id pellentesque vel, lobortis nec eros. Aliquam nisl risus, gravida eu ligula ac, vulputate molestie libero. Morbi vitae lorem a diam tincidunt porta vitae eget ligula. Sed et suscipit urna, vel mollis libero. Proin nisi ante, congue at auctor sed, vestibulum vitae est. Sed eu tincidunt lectus. Maecenas eget lacus vel ante ornare molestie. Nam fermentum, justo eget convallis faucibus, mi felis consectetur metus, eget interdum sem quam mollis ante. Donec iaculis, metus in accumsan aliquam, sapien justo tristique lectus, ut porta nisl justo et metus. Quisque pharetra erat in semper vulputate. Fusce nec erat volutpat, facilisis dolor vitae, commodo tortor. Nunc mattis euismod pretium. Nullam congue porta elit et tempus. Integer mi ligula, porttitor id consequat a, efficitur vitae nibh. 
      </p>
      <h2>Our board of directors</h2>
      <div>
        <Avatar alt={t('About-Screen-President')} src={cat}>B</Avatar>
        Dread pirate molly
      </div>
      <div>
        Some others i guess. who cares.
      </div>
    </div>
  );
};

About.propTypes = {
};

export default About;
