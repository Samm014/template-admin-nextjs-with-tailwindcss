import MenuItem from "./MenuItem";
import Logo from "./Logo";
import { HomeIcon, SettingsIcon, BellIcon, ExitIcon } from "../icons";

export default function SideMenu(){
    return (
        <aside className={`
            flex flex-col
            dark:bg-gray-900
            bg-gray-200 text-gray-700
        `}>
            
            <Logo />

            <ul className="flex-grow">
                <MenuItem url="/" text="Início" icon={HomeIcon} />
                <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon} />
                <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
            </ul>
            <ul>
                <MenuItem 
                    url="/"
                    text="Sair"
                    icon={ExitIcon}
                    onClick={()=> console.log('logout')}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}