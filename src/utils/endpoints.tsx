import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export enum Endpoint {
  Root = '/',
  Wishes = '/wishes',
  Spheres = '/spheres',
  Game = '/game',
  Info = '/info',
}

type EndpointDetails = {
  endpoint: Endpoint;
  label: string;
  icon: JSX.Element;
};

export const endpoints: EndpointDetails[] = [
  {
    endpoint: Endpoint.Wishes,
    label: 'Желания',
    icon: <FormatListNumberedRoundedIcon />,
  },
  {
    endpoint: Endpoint.Spheres,
    label: 'Сферы',
    icon: <CategoryRoundedIcon />,
  },
  {
    endpoint: Endpoint.Game,
    label: 'Игра',
    icon: <SportsEsportsRoundedIcon />,
  },
  {
    endpoint: Endpoint.Info,
    label: 'Информация',
    icon: <InfoRoundedIcon />,
  },
];
