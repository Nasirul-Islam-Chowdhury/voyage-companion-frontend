import { USER_ROLE } from "@/constants/role";
import { IDrawerItem, TUserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";

export const drawerItems = (role: TUserRole): IDrawerItem[] => {
  console.log(role);
  const senitizedRole = role?.toLowerCase();
  const roleMenus: IDrawerItem[] = [];
  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
        title: "Manage Users",
        path: `${senitizedRole}/manage-users`,
        icon: PeopleAltIcon,
      },
        {
        title: "Manage Trips",
        path: `${senitizedRole}/manage-trips`,
        icon: PeopleAltIcon,
      },
      {
        title: "Profile",
        path: `${senitizedRole}/profile`,
        icon: PersonIcon,
      },
      {
        title: "Password",
        path: `${senitizedRole}/password`,
        icon: EnhancedEncryptionIcon,
      }
    );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Post Trip",
          path: `${senitizedRole}/post-trip`,
          icon: PostAddIcon,
        },
        {
          title: "Sent Requests",
          path: `${senitizedRole}/my-request`,
          icon: SendTimeExtensionIcon,
        },
        {
          title: "Profile",
          path: `${senitizedRole}/profile`,
          icon: PersonIcon,
        },
       
        {
          title: "My Trips",
          path: `${senitizedRole}/my-trips`,
          icon: EnhancedEncryptionIcon,
        },
        {
          title: "Trip Requests",
          path: `${senitizedRole}/trip-requests`,
          icon: EnhancedEncryptionIcon,
        },
        {
          title: "Password",
          path: `${senitizedRole}/password`,
          icon: EnhancedEncryptionIcon,
        },
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
