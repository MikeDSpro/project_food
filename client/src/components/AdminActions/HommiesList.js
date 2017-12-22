import React from 'react';
import UserRecord from '../NewDayPage/UserRecord';

const HommiesList = (props) => {

  const {hommies, deleteHommy, loadHommyData} = props;
  return(
    <div>
      {hommies.map((hom) => <UserRecord
      key = {hom.id}
      id={hom.id}
      email={hom.email}
      firstName={hom.firstName}
      lastName={hom.lastName}
      deleteHommy={() => deleteHommy(hom.id)}
      loadHommyData={() => loadHommyData(hom.id)}
      /> )}
    </div>
  )
};

export default HommiesList;