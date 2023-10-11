import { ConfigProvider, App } from 'antd';
import { ConfigProviderProps } from 'antd/lib/config-provider';

export function AntdProvider({ children, ...props }: ConfigProviderProps) {
  return (
    <ConfigProvider {...props}>
      <App>
        {children}
      </App>
    </ConfigProvider>
  )
}