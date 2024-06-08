import { USER_ROLE } from "@/constants/role";
import { IDrawerItem, TUserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";

export const drawerItems = (role: TUserRole): IDrawerItem[] => {
  const userRole = role?.toLowerCase();
  console.log(role);
  const roleMenus: IDrawerItem[] = [];
  switch (userRole) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
        title: "Manage Users",
        path: `${userRole}/manage-users`,
        icon: PeopleAltIcon,
      },
        {
        title: "Manage Trips",
        path: `${userRole}/manage-trips`,
        icon: PeopleAltIcon,
      },
      {
        title: "Profile",
        path: `${userRole}/profile`,
        icon: PersonIcon,
      },
      {
        title: "Password",
        path: `${userRole}/password`,
        icon: EnhancedEncryptionIcon,
      }
    );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Post Trip",
          path: `${userRole}/post-trip`,
          icon: PostAddIcon,
        },
        {
          title: "My Request",
          path: `${userRole}/my-request`,
          icon: SendTimeExtensionIcon,
        },
        {
          title: "Profile",
          path: `${userRole}/profile`,
          icon: PersonIcon,
        },
        {
          title: "Password",
          path: `${userRole}/password`,
          icon: EnhancedEncryptionIcon,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
