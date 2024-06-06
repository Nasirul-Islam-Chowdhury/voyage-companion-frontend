
import { USER_ROLE } from "@/constants/role";
import { IDrawerItem, TUserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";

export const drawerItems = (role: TUserRole): IDrawerItem[] => {
    console.log(role)
  const roleMenus: IDrawerItem[] = [];
  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: role,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: PeopleAltIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: role,
          icon: DashboardIcon,
        },
        {
          title: "Post Trip",
          path: `${role}/post-trip`,
          icon: PostAddIcon,
        },
        {
          title: "My Request",
          path: `${role}/my-request`,
          icon: SendTimeExtensionIcon,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: PersonIcon,
        },
        {
          title: "Password",
          path: `${role}/password`,
          icon: EnhancedEncryptionIcon,
        }
      );
      break;

    default:
      break;
  }
  console.log(roleMenus)
  return [...roleMenus];
};