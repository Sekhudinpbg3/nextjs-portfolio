import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/lib/config-provider';

export function AntdProvider({ children, ...props }: ConfigProviderProps) {
  return (
    <ConfigProvider {...props}>
      {children}
    </ConfigProvider>
  )
}