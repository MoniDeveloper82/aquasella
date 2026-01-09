const ShopPage: React.FC = () => {
  return (
    <div style={{ flex: 1, width: '100vw', height: 'calc(100vh - 6rem)', background: 'black', margin: 0, padding: 0 }}>
      <iframe
        src="https://aquasellashop.com/"
        title="Aquasella Shop"
        width="100%"
        height="100%"
        style={{ width: '100vw', height: '100%', border: 'none', background: 'white', display: 'block' }}
        allowFullScreen
      />
    </div>
  );
};

export default ShopPage;