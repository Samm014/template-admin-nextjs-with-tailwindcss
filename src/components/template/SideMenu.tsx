import MenuItem from "./MenuItem";
import Logo from "./Logo";
import { HomeIcon, SettingsIcon, BellIcon } from "../icons";

export default function SideMenu(){
    return (
        <aside>
            
            <Logo />

            <ul>
                <MenuItem url="/" text="Início" icon={HomeIcon} />
                <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon} />
                <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
            </ul>
        </aside>
    )
}