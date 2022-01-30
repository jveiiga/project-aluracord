import appConfig from '../config.json'

export default function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
      <div>
        <Tag>{props.children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
                  margin-top: 20px;
              }
              `}</style>
      </div>
    );
  } 