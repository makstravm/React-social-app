import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogDataType } from '../../../redux/store';
import style from '../Dialogs.module.css'

type DialogsItemPropsType = {
    dialogData: Array<DialogDataType>
}

export const DialogsItem = (props: DialogsItemPropsType) => {
    const dialogItemData = props.dialogData.map((d) => {

        const path = '/dialogs/' + d.id
        return (
            <NavLink to={path}
                className={style.link}
                activeClassName={style.active}
                key={d.id}
            >
                {d.name}
            </NavLink>
        )
    })
    return (
        <div className={style.items}>
            {dialogItemData}

        </div >
    )
}


