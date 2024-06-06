import { IDrawerItem } from "@/types";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItems = ({ item }: { item: IDrawerItem }) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();
  return (
    <Link href={linkPath} style={{ textDecoration: "none" }}>
      <ListItem
        disablePadding
        sx={{
          ...(linkPath === pathName
            ? {
                "& span": { color: grey[800], fontWeight: 700 },
                "& svg": { color: grey[900] },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: "40px" }}>
            {item.icon && <item.icon />}
          </ListItemIcon>
          <ListItemText primary={item.title} sx={{ textDecoration: "none" }} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;