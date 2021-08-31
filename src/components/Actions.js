import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Love from './actions/Love';

const Actions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <Rewind userId={person.id} />
    <Dislike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Love
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
  </div>
);

export default Actions;