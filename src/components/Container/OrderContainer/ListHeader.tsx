import React from 'react';
import {View} from 'react-native';




export const ListHeader = () => {
    //const tableNumber = useSelector(selectTableNumber);
    //const isDineIn = useSelector(selectIsDineIn);



    const onTableChange = (tblNo: string) => {
      //  dispatch(setTableNumber({tableNumber: tblNo}));
    };

    return (
        <View>
            {/* TABLE NUMBER */}
            {/*isDineIn && (
                <TableSelector
                    setTableNumber={onTableChange}
                    tableNumber={tableNumber}
                />
            )
            */}
        </View>
    );
};
