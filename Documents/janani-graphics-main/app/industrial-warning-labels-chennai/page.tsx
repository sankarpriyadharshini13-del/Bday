import ServicePage from '../components/ServicePage';
import { buildServiceMetadata, getService } from '../data/services';

const service = getService('industrial-warning-labels-chennai');

export const metadata = buildServiceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
