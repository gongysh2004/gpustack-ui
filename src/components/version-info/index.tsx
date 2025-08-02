import LogoDark from '@/assets/images/ailinks-logo-dark.png';
import Logo from '@/assets/images/ailinks-logo.png';
import { GPUStackVersionAtom, UpdateCheckAtom } from '@/atoms/user';
import { getAtomStorage } from '@/atoms/utils';
import useUserSettings from '@/hooks/use-user-settings';
import React from 'react';
import './index.less';

const VersionInfo: React.FC<{ intl: any }> = ({ intl }) => {
  const latestVersion = getAtomStorage(UpdateCheckAtom).latest_version;
  const currentVersion = getAtomStorage(GPUStackVersionAtom)?.version;
  const { isDarkTheme } = useUserSettings();

  const isProd =
    currentVersion?.indexOf('rc') === -1 &&
    currentVersion?.indexOf('0.0.0') === -1;

  const uiVersion = document.documentElement.getAttribute('data-version');

  return (
    <div className="version-box">
      <div className="img">
        <img src={isDarkTheme ? LogoDark : Logo} alt="logo" />
      </div>

      <div className="ver">
        {isProd && (
          <span className="label">
            {intl.formatMessage({ id: 'common.footer.version' })}
          </span>
        )}
        {isProd ? (
          <span className="val">
            {getAtomStorage(GPUStackVersionAtom)?.version ||
              getAtomStorage(GPUStackVersionAtom)?.git_commit}
          </span>
        ) : (
          <span className="val dev">
            <span className="item">
              <span className="tl">
                {' '}
                {intl.formatMessage({ id: 'common.footer.version.server' })}
              </span>
              {currentVersion.indexOf('0.0.0') > -1
                ? getAtomStorage(GPUStackVersionAtom)?.git_commit
                : getAtomStorage(GPUStackVersionAtom)?.version}
            </span>
            <span className="item">
              <span className="tl">UI</span>
              {uiVersion}
            </span>
          </span>
        )}
      </div>
      {/* {getAtomStorage(userAtom)?.is_admin && isProd && (
        <div className="upgrade-text">
          <span className="m-l-5">
            {latestVersion &&
            latestVersion !== currentVersion &&
            latestVersion.indexOf('0.0.0') === -1
              ? intl.formatMessage(
                  { id: 'users.version.update' },
                  { version: latestVersion }
                )
              : intl.formatMessage(
                  { id: 'users.version.islatest' },
                  { version: currentVersion }
                )}
          </span>
          <Button
            type="link"
            href={externalLinks.release}
            target="_blank"
            style={{ paddingInline: 0 }}
          >
            {intl.formatMessage({ id: 'common.text.changelog' })}
          </Button>
        </div>
      )} */}
    </div>
  );
};

export const modalConfig = {
  icon: null,
  centered: false,
  maskClosable: true,
  footer: null,
  style: {
    top: '30%'
  },
  width: 400
};

export default VersionInfo;
