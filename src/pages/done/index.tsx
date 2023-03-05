import React from 'react';
import { Card, Result, Space } from 'antd-mobile';
import { SmileOutline } from 'antd-mobile-icons';
import styles from '@/styles/common.module.css';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

export interface DonePageProps {}

const DonePage: React.FC<DonePageProps> = (props) => {
  return (
    <div className={styles.app}>
      <div className={styles.body}>
        <Card style={{ width: '100%' }}>
          <Result
            icon={<SmileOutline />}
            status="success"
            title="Done!"
            description="Also share it to let everyone know you met :)"
          />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Space>
              <FacebookShareButton url="https://nice-to-meet-you.vercel.app/checkin">
                <FacebookIcon round size={48}></FacebookIcon>
              </FacebookShareButton>
              <TwitterShareButton url="https://nice-to-meet-you.vercel.app/checkin">
                <TwitterIcon round size={48}></TwitterIcon>
              </TwitterShareButton>
            </Space>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DonePage;
