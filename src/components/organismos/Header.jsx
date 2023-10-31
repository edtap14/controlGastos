import {ContentHeader, DataUser} from "../../index.js";

export function Header({stateConfig}){
    return (
        <ContentHeader>
           <DataUser stateConfig={stateConfig} />
        </ContentHeader>
    )
}
