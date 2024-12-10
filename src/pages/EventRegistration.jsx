import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { events } from '../utils/constants';

const EventRegistration = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === parseInt(eventId));

  // Get min and max team size from event
  const [minTeamSize, maxTeamSize] = event?.teamSize?.split('-').map(num => parseInt(num)) || [1, 1];

  const [formData, setFormData] = useState({
    teamName: '',
    college: '',
    teamLeader: {
      name: '',
      email: '',
      phone: '',
    },
    members: [],
    memberCount: minTeamSize - 1
  });

  const [errors, setErrors] = useState({});

  // Update members array when memberCount changes
  useEffect(() => {
    const newMembers = Array(formData.memberCount).fill().map((_, index) => 
      formData.members[index] || {
        name: '',
        email: '',
        phone: ''
      }
    );
    setFormData(prev => ({ ...prev, members: newMembers }));
  }, [formData.memberCount]);

  if (!event) {
    return (
      <div className="min-h-screen bg-primary py-20 px-4 text-center">
        <h1 className="text-2xl text-white">Event not found</h1>
        <button
          onClick={() => navigate('/events')}
          className="mt-4 px-6 py-2 bg-secondary text-white rounded-full"
        >
          Back to Events
        </button>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};

    // Validate team name and college
    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
    if (!formData.college.trim()) newErrors.college = 'College name is required';

    // Validate team leader
    if (!formData.teamLeader.name.trim()) newErrors.leaderName = 'Name is required';
    if (!formData.teamLeader.email.trim()) {
      newErrors.leaderEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.teamLeader.email)) {
      newErrors.leaderEmail = 'Invalid email format';
    }
    if (!formData.teamLeader.phone.trim()) {
      newErrors.leaderPhone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.teamLeader.phone.replace(/[- ]/g, ''))) {
      newErrors.leaderPhone = 'Invalid phone number (10 digits required)';
    }

    // Validate members
    formData.members.forEach((member, index) => {
      if (!member.name.trim()) newErrors[`member${index}Name`] = 'Name is required';
      if (!member.email.trim()) {
        newErrors[`member${index}Email`] = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(member.email)) {
        newErrors[`member${index}Email`] = 'Invalid email format';
      }
      if (!member.phone.trim()) {
        newErrors[`member${index}Phone`] = 'Phone number is required';
      } else if (!/^\d{10}$/.test(member.phone.replace(/[- ]/g, ''))) {
        newErrors[`member${index}Phone`] = 'Invalid phone number (10 digits required)';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Handle form submission
      alert('Registration successful!');
      navigate('/events');
    }
  };

  const updateMemberData = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display text-white mb-4">
              Register for {event.title}
            </h1>
            <p className="text-gray-300">Fill in the details to register your team</p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Event Details Card */}
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-secondary font-semibold mb-2">Event Details</h3>
                  <p className="text-white">{event.title}</p>
                  <p className="text-gray-300 text-sm mt-1">{event.date} • {event.time}</p>
                  <p className="text-gray-300 text-sm">{event.venue}</p>
                </div>
                <div className="text-right">
                  <h3 className="text-secondary font-semibold mb-2">Registration Fee</h3>
                  <p className="text-white">{event.registrationFee}</p>
                  <p className="text-gray-300 text-sm mt-1">Team Size: {event.teamSize}</p>
                </div>
              </div>
            </div>

            {/* Team Details */}
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-display text-white mb-6">Team Details</h3>
              <div className="space-y-6">
                {/* Basic Team Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Team Name</label>
                    <input
                      type="text"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      className={`w-full bg-white/10 border ${errors.teamName ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                      required
                    />
                    {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">College</label>
                    <input
                      type="text"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className={`w-full bg-white/10 border ${errors.college ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                      required
                    />
                    {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
                  </div>
                </div>

                {/* Team Size Selector */}
                <div>
                  <label className="block text-gray-300 mb-2">Number of Team Members (excluding leader)</label>
                  <select
                    value={formData.memberCount}
                    onChange={(e) => setFormData({ ...formData, memberCount: parseInt(e.target.value) })}
                    className="w-full md:w-1/3 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary"
                  >
                    {Array.from({ length: maxTeamSize - minTeamSize + 1 }, (_, i) => i + minTeamSize - 1).map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                {/* Team Leader Details */}
                <div>
                  <h4 className="text-lg text-secondary mb-4">Team Leader</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.teamLeader.name}
                        onChange={(e) => setFormData({
                          ...formData,
                          teamLeader: { ...formData.teamLeader, name: e.target.value }
                        })}
                        className={`w-full bg-white/10 border ${errors.leaderName ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                        required
                      />
                      {errors.leaderName && <p className="text-red-500 text-sm mt-1">{errors.leaderName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.teamLeader.email}
                        onChange={(e) => setFormData({
                          ...formData,
                          teamLeader: { ...formData.teamLeader, email: e.target.value }
                        })}
                        className={`w-full bg-white/10 border ${errors.leaderEmail ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                        required
                      />
                      {errors.leaderEmail && <p className="text-red-500 text-sm mt-1">{errors.leaderEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Mobile Number</label>
                      <input
                        type="tel"
                        value={formData.teamLeader.phone}
                        onChange={(e) => setFormData({
                          ...formData,
                          teamLeader: { ...formData.teamLeader, phone: e.target.value }
                        })}
                        placeholder="10-digit mobile number"
                        className={`w-full bg-white/10 border ${errors.leaderPhone ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                        required
                      />
                      {errors.leaderPhone && <p className="text-red-500 text-sm mt-1">{errors.leaderPhone}</p>}
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                {formData.members.length > 0 && (
                  <div>
                    <h4 className="text-lg text-secondary mb-4">Team Members</h4>
                    {formData.members.map((member, index) => (
                      <div key={index} className="mb-6 p-4 border border-white/10 rounded-lg">
                        <h5 className="text-white mb-4">Member {index + 1}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2">Full Name</label>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => updateMemberData(index, 'name', e.target.value)}
                              className={`w-full bg-white/10 border ${errors[`member${index}Name`] ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                              required
                            />
                            {errors[`member${index}Name`] && <p className="text-red-500 text-sm mt-1">{errors[`member${index}Name`]}</p>}
                          </div>

                          <div>
                            <label className="block text-gray-300 mb-2">Email</label>
                            <input
                              type="email"
                              value={member.email}
                              onChange={(e) => updateMemberData(index, 'email', e.target.value)}
                              className={`w-full bg-white/10 border ${errors[`member${index}Email`] ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                              required
                            />
                            {errors[`member${index}Email`] && <p className="text-red-500 text-sm mt-1">{errors[`member${index}Email`]}</p>}
                          </div>

                          <div>
                            <label className="block text-gray-300 mb-2">Mobile Number</label>
                            <input
                              type="tel"
                              value={member.phone}
                              onChange={(e) => updateMemberData(index, 'phone', e.target.value)}
                              placeholder="10-digit mobile number"
                              className={`w-full bg-white/10 border ${errors[`member${index}Phone`] ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary`}
                              required
                            />
                            {errors[`member${index}Phone`] && <p className="text-red-500 text-sm mt-1">{errors[`member${index}Phone`]}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/events')}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white rounded-full font-semibold transition-colors"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EventRegistration; 