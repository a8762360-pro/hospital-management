import { useLoaderData } from "react-router";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaCalendarAlt,
    FaClock,
    FaMoneyBillWave,
    FaBuilding,
    FaGraduationCap,
    FaBriefcaseMedical,
} from "react-icons/fa";

const DoctorDetails = () => {
    const doctor = useLoaderData();

    return (
        <section className="max-w-7xl mx-auto px-5 py-16">

            <div className="bg-white shadow-xl rounded-xl overflow-hidden">

                <div className="grid lg:grid-cols-3">

                    {/* Image */}

                    <div>
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details */}

                    <div className="lg:col-span-2 p-10">

                        <h1 className="text-4xl font-bold text-secondary">
                            {doctor.name}
                        </h1>

                        <p className="text-primary uppercase tracking-[3px] mt-2">
                            {doctor.specialist}
                        </p>

                        <div className="grid md:grid-cols-2 gap-5 mt-10">

                            <div className="flex items-center gap-3">
                                <FaBuilding className="text-primary" />
                                <span>{doctor.department}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaGraduationCap className="text-primary" />
                                <span>{doctor.education}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaBriefcaseMedical className="text-primary" />
                                <span>{doctor.experience} Experience</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaMoneyBillWave className="text-primary" />
                                <span>${doctor.consultationFee}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaBuilding className="text-primary" />
                                <span>Room {doctor.roomNumber}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCalendarAlt className="text-primary" />
                                <span>{doctor.availableDays}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaClock className="text-primary" />
                                <span>{doctor.availableTime}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-primary" />
                                <span>{doctor.phone}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <span>{doctor.email}</span>
                            </div>

                        </div>

                        <div className="flex gap-4 mt-10">

                            <a
                                href={doctor.facebook}
                                className="w-12 h-12 rounded-full bg-secondary text-white flex justify-center items-center hover:bg-primary duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href={doctor.linkedin}
                                className="w-12 h-12 rounded-full bg-secondary text-white flex justify-center items-center hover:bg-primary duration-300"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href={doctor.instagram}
                                className="w-12 h-12 rounded-full bg-secondary text-white flex justify-center items-center hover:bg-primary duration-300"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                        <button className="btn bg-primary hover:bg-secondary text-white mt-10 px-10">
                            Book Appointment
                        </button>

                    </div>

                </div>

            </div>

            <div className="mt-16 bg-white rounded-xl shadow-lg p-10">

                <h2 className="text-3xl font-bold text-secondary mb-5">
                    About Doctor
                </h2>

                <p className="text-gray-600 leading-8">
                    {doctor.name} is one of the leading specialists in the
                    {` ${doctor.department} `}
                    department. With {doctor.experience} of professional experience,
                    the doctor is committed to providing compassionate, personalized,
                    and evidence-based healthcare. Patients appreciate the doctor's
                    expertise, dedication, and friendly approach to treatment.
                </p>

            </div>

        </section>
    );
};

export default DoctorDetails;